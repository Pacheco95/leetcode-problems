import pytest

class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        left_index, right_index = 0, 0
        n = len(nums)

        while right_index < n:
            left, right = nums[left_index], nums[right_index]

            if left != right:
                left_index += 1
                nums[left_index] = right
            
            right_index += 1
        
        return left_index + 1

@pytest.mark.parametrize('numbers,expected', [
    ([1, 1, 1, 2, 2, 3, 3], [1, 2, 3])
])
def test_solution(numbers, expected):
    new_size = Solution().removeDuplicates(numbers)
    assert numbers[:new_size] == expected
