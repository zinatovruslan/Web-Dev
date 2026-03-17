def cat_dog(s):
    cat_count = 0
    dog_count = 0
    
    for i in range(len(s) - 2):
        if s[i:i+3] == "cat":
            cat_count += 1
        if s[i:i+3] == "dog":
            dog_count += 1
    
    return cat_count == dog_count