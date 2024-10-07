#include <iostream>
#include <vector>
#include<string>
#include<unordered_map>
using namespace std;

int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return i; 
        }
    }
    return -1; 
}
int linearSearch(const vector<string>& arr, const string& target)
{
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return i; 
        }
    }
    return -1; 
}
int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2; 

        if (arr[mid] == target) {
            return mid; 
        }
        
        else if (arr[mid] < target) {
            left = mid + 1;
        }
       
        else {
            right = mid - 1;
        }
    }
    return -1; 
}
vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
    unordered_map<int, int> countMap;
    vector<int> result;

    for (int num : nums1) {
        countMap[num]++;
    }

    for (int num : nums2) {
        if (countMap[num] > 0) {
            result.push_back(num); 
            countMap[num]--; 
        }
    }

    return result;
}

int main()
{
    vector<int> nums1 = { 1, 2, 2, 1 };
    vector<int> nums2 = { 2, 2 };

    vector<int> result = intersect(nums1, nums2);

    cout << "Intersection: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;


    nums1 = { 4, 9, 5 };
    nums2 = { 9, 4, 9, 8, 4 };

    result = intersect(nums1, nums2);

    cout << "Intersection: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
}
int main1() 
{
    
    int choice;
   
    
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1)
        {
       
            char choice2;
            cout << "Which part A or B??";
            cin >> choice2;
            if (choice2 == 'A')
            {
                vector<int> arr = { 34, 78, 12, 9, 67, 55 };
                int target;
                cout << "Enter the target element: ";
                cin >> target;
                int index = linearSearch(arr, target);

                if (index != -1) {
                    cout << "Element found at index: " << index << endl;
                }
                else {
                    cout << "Element not found." << endl;
                }
            }
            if(choice2=='B')
            {
                vector<string> arr = { "apple", "banana", "grape", "orange", "kiwi" };
                string target;

                cout << "Enter the target string: ";
                cin >> target;

                int index = linearSearch(arr, target);

                if (index != -1) {
                   cout << "Element found at index: " << index << endl;
                }
                else {
                    cout << "Element not found." << endl;
                }
            }

        }
        if (choice == 2)
        {
            char choice2;
        
                cout << "Which part A or B??";
                cin >> choice2;
                if (choice2 == 'A')
                {
                    vector<int> arr = { 2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91 };
                    int target;

                    cout << "Enter the target element: ";
                    cin >> target;

                    int index = binarySearch(arr, target);

                    if (index != -1) {
                        cout << "Element found at index: " << index << endl;
                    }
                    else {
                        cout << "Element not found." << endl;
                    }

                }
                if (choice == 'B')
                {
                    vector<int> nums1 = { 1, 2, 2, 1 };
                    vector<int> nums2 = { 2, 2 };

                    vector<int> result = intersect(nums1, nums2);

                    cout << "Intersection: ";
                    for (int num : result) {
                        cout << num << " ";
                    }
                    cout << endl;


                    nums1 = { 4, 9, 5 };
                    nums2 = { 9, 4, 9, 8, 4 };

                    result = intersect(nums1, nums2);

                    cout << "Intersection: ";
                    for (int num : result) {
                        cout << num << " ";
                    }
                    cout << endl;
                }
        }
    
    return 0;
}
