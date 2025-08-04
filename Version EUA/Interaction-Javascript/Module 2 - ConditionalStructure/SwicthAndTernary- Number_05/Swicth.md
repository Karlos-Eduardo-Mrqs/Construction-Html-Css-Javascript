# Note 👁️

- [Read the If_Else conditionals first!](../IfAndElse-Number_04/IfAndElse.md)

---

## Switch Conditional Structure and the Ternary Operator

### Switch

You can use the `switch` to select one of many blocks of code, based on your condition.

![image](https://github.com/user-attachments/assets/7cfae8a4-d73d-4a63-9936-ac1a39d3fe63)

---

## Ternary Operator

The conditional (ternary) operator is the only JavaScript operator that has three operands. This operator is often used as a shortcut for the `if` statement.

![image](https://github.com/user-attachments/assets/019ef20a-cf20-40ca-aa79-1ab4cda51fa3)

---

## Practice with the Switch

We will perform user recognition using the `switch`. We will present the user with a welcome message. For the program to recognize the user, we will need three passwords: one for the teacher, one for the student, and one for the administrator. In the end, we will have four conditions:

1. If the password is `"Admin478"`: The program will alert you that you are an administrator;
2. If the password is `"Professor564"`: The program will alert you that you are a teacher;
3. If the password is `"Student231"`: The program will alert you that you are a student;
4. If none of these passwords are present: The program will alert you that you do not have a valid password and you should contact support;

---

### HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>User Recognition</title>
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```

---

### Javascript File

We will introduce the user, an alert ("Welcome"). Then the system will ask for the password to recognize the user. Then, using the password, we will identify their hierarchy (Admin, Teacher, and Student);

### Result For Admin

![image](https://github.com/user-attachments/assets/8ef00737-f49b-4632-8554-1cf4681d890b)

![image](https://github.com/user-attachments/assets/dbda6071-9a97-4c6d-bf8e-cf43e6b319f6)

![image](https://github.com/user-attachments/assets/c3a60feb-b760-4466-837e-a38077bd2425)

### Result For Teacher

![image](https://github.com/user-attachments/assets/affbd8fe-f0b5-427b-bbed-2b2cfeca8530)

![image](https://github.com/user-attachments/assets/8e30bc2b-4b48-493c-87ce-4a81d2b1b817)

![image](https://github.com/user-attachments/assets/892b6334-6027-4533-9f52-9c6883e29780)

### Result for Student

![image](https://github.com/user-attachments/assets/606a7941-6581-4bd2-a2da-366f472a46cf)

![image](https://github.com/user-attachments/assets/858d320a-dd39-4e31-aa78-2490e0721205)

![image](https://github.com/user-attachments/assets/4d70ee9f-c282-4ee7-ac81-dc2d9d9dd760)

### Result for the Unknown

![image](https://github.com/user-attachments/assets/606a7941-6581-4bd2-a2da-366f472a46cf)

![image](https://github.com/user-attachments/assets/9d5a9d06-0818-4a0c-8022-58c22ef496ff)

![image](https://github.com/user-attachments/assets/6e3d0205-cde6-448b-9cea-9332f2e06f6a)

---

## Next Chapter

- [Continued in the next chapter](../SwicthAndTernary-%20Number_05/Ternary.md)
