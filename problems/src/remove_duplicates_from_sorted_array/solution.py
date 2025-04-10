class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        left_index, right_index = 0, 1
        n = len(nums)

        while right_index < n:
            left, right = nums[left_index], nums[right_index]

            if left != right:
                left_index += 1
                nums[left_index] = right
            
            right_index += 1
        
        return left_index + 1
