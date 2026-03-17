def array_front9(nums):
    end = 4
    if len(nums) < 4:
        end = len(nums)
    
    for i in range(end):
        if nums[i] == 9:
            return True
    return False