# Assign3-ArchitecturePatterns
Leveraging the MVC design / architecture pattern for the design of a Cash Register interface. 

Class: SOFE 3650U

Group Number: Course_Gp 22

Due Date: 10/12/21 @ 11:30 PM

Authors: 

	Adhish Malhotra (100761306)

	Aiden Jolley-Ruhn (100745886)
	 
	Hima Paul (100753261) 
	 
	Shreya Patel (100747036)

# Introduction
In order to complete this assignment, out of many options available, our group decided to leverage .NET CORE platform. MVC (Model-View-Controller) template was used towards the completion of the given assinment. The source code of the project has been committed under q1 folder. The reason behind choosing the .NET CORE platform is that this platform gave us an opportunity to execute the MVC design pattern a lot more efficiently than any other environmnet / language (for example java). 

# Source Code Explanation
There are three main folders under the solution (Models, Controllers and Views). The models folder contain the definition of the C# class products.

The controller folder contains the C# class HomeController and ProductsController. ProductsController has various functions in order to modify the Product entity. We decided to add the functionality of that of creating a new product, indexing the list of products in the database, providing the details of a particular product, editing the objects of a product, deleting one product from the list of products. 

The Views folder contains two sub-folders Home and Products. Since we are more concerned about the Products view, we decided to have each page which would correspond to each function that we can perform on the Product. Henceforth, we have Create, Delete, Details, Edit and Index page. 

In addition to all of that, there's a Data folder as well. The two files in the data folder are essentially responsible for seeding the database and then creating SQLITE tables corresponding to the data that has been added by the user. 

# How to run the code? 
You can easily run the code by following these steps: 

	1. Clone this repository to your visual studio 2019. 
	2. Double click on q1 and then open the Question1.sln (solution file)
	3. Install the following packages using Nuget Package Manager Console otherwise an error would be displayed. The command are as follows 
		Install-Package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore
		Install-Package Microsoft.EntityFrameworkCore.SqlServer
	4. Run the code by clicking the run button on the task bar. 
![image](https://user-images.githubusercontent.com/66443183/137057323-ead94492-22c3-43c1-87c0-4ba090a5ae68.png)

# Question 2 
The solution to question 2 has been provided under q1 folder itself (where the source code is placed). When clicked on Details button, it directs you to the details of the product. 

# Screenshots
The screenshots of different views have been provided under the Screenshots folder. 
