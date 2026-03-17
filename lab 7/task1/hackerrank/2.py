if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    all_grades = []
    for student in students:
        all_grades.append(student[1])
    
    unique_grades = []
    for grade in all_grades:
        if grade not in unique_grades:
            unique_grades.append(grade)
    
    unique_grades.sort()
    second_lowest = unique_grades[1]
    
    result = []
    for student in students:
        if student[1] == second_lowest:
            result.append(student[0])
    
    result.sort()
    for name in result:
        print(name)