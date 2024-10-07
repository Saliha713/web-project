import heapq
import time
from collections import deque

class Node:
    def __init__(self, position, g, h):
        self.position = position  # Current position (x, y)
        self.g = g  # Cost from start to current node
        self.h = h  # Heuristic cost to goal
        self.f = g + h  # Total cost (f = g + h)

    def __lt__(self, other):
        return self.f < other.f

def heuristic(a, b):
    # Manhattan distance
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

# A* Algorithm
def a_star_algorithm(grid, start, goal):
    open_set = []
    closed_set = set()
    start_node = Node(start, 0, heuristic(start, goal))
    heapq.heappush(open_set, start_node)

    came_from = {}
    g_score = {start: 0}
    f_score = {start: start_node.h}

    while open_set:
        current_node = heapq.heappop(open_set)

        # If we reached the goal
        if current_node.position == goal:
            return reconstruct_path(came_from, current_node.position)

        closed_set.add(current_node.position)

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            neighbor = (current_node.position[0] + dx, current_node.position[1] + dy)

            if (0 <= neighbor[0] < len(grid) and
                    0 <= neighbor[1] < len(grid[0]) and
                    grid[neighbor[0]][neighbor[1]] == 0 and
                    neighbor not in closed_set):

                tentative_g_score = g_score[current_node.position] + 1

                if neighbor not in g_score or tentative_g_score < g_score[neighbor]:
                    came_from[neighbor] = current_node.position
                    g_score[neighbor] = tentative_g_score
                    f_score[neighbor] = tentative_g_score + heuristic(neighbor, goal)

                    if neighbor not in (node.position for node in open_set):
                        heapq.heappush(open_set, Node(neighbor, g_score[neighbor], heuristic(neighbor, goal)))

    return None  # No path found

# Beam Search Algorithm
def beam_search(grid, start, goal, beam_width):
    queue = deque([(start, [start])])
    
    while queue:
        current_level = []
        for _ in range(min(beam_width, len(queue))):
            node, path = queue.popleft()
            if node == goal:
                return path
            current_level.append((node, path))
        
        next_level = []
        for node, path in current_level:
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                next_node = (node[0] + dx, node[1] + dy)
                if 0 <= next_node[0] < len(grid) and 0 <= next_node[1] < len(grid[0]) and grid[next_node[0]][next_node[1]] == 0 and next_node not in path:
                    new_path = path + [next_node]
                    next_level.append((next_node, new_path))
        
        next_level.sort(key=lambda x: heuristic(x[0], goal))
        for i in range(min(beam_width, len(next_level))):
            queue.append(next_level[i])
    
    return None  # No path found

# Path reconstruction for A*
def reconstruct_path(came_from, current):
    total_path = [current]
    while current in came_from:
        current = came_from[current]
        total_path.append(current)
    return total_path[::-1]

# Menu-based system
def main():
    grid = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
    ]
    start = (0, 0)
    goal = (4, 4)

    while True:
        print("\n1. Run A* Algorithm")
        print("2. Run Beam Search Algorithm")
        print("3. Compare A* and Beam Search")
        print("4. Exit")
        
        choice = input("Enter your choice: ")

        if choice == "1":
            start_time = time.time()
            path = a_star_algorithm(grid, start, goal)
            end_time = time.time()
            if path:
                print(f"Shortest path found by A*: {path}")
                print(f"Time taken: {end_time - start_time:.6f} seconds")
                print(f"Path length: {len(path)}")
            else:
                print("No path found.")
        
        elif choice == "2":
            beam_width = int(input("Enter beam width: "))
            start_time = time.time()
            path = beam_search(grid, start, goal, beam_width)
            end_time = time.time()
            if path:
                print(f"Path found by Beam Search: {path}")
                print(f"Time taken: {end_time - start_time:.6f} seconds")
                print(f"Path length: {len(path)}")
            else:
                print("No path found.")
        
        elif choice == "3":
            beam_width = int(input("Enter beam width for comparison: "))
            
            # A* comparison
            start_time = time.time()
            path_a_star = a_star_algorithm(grid, start, goal)
            a_star_time = time.time() - start_time
            a_star_length = len(path_a_star) if path_a_star else float('inf')
            
            # Beam Search comparison
            start_time = time.time()
            path_beam = beam_search(grid, start, goal, beam_width)
            beam_time = time.time() - start_time
            beam_length = len(path_beam) if path_beam else float('inf')
            
            # Results
            print(f"\nA* Results: Time = {a_star_time:.6f} seconds, Path Length = {a_star_length}")
            print(f"Beam Search Results: Time = {beam_time:.6f} seconds, Path Length = {beam_length}")
        
        elif choice == "4":
            break
        
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
