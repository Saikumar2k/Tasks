package Restaurant;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;
import Restaurant.Jdbc;
public class CashCounter extends Jdbc{

 public static void main(String[] args) throws ClassNotFoundException, SQLException  {
 CashCounter.initializeConnection();
 Statement statement=CashCounter.connection.createStatement();
 ResultSet resultSet=statement.executeQuery("select * from payment");
 
CheckUserNameandPassword obj = new CheckUserNameandPassword();
 
 Scanner input = new Scanner(System.in);
 String name;
 String password;
 do { 
  System.out.println("Please Enter name and password:");
  
  System.out.println("Enter User id :");
     
  name = input.next();
 
  System.out.println("Enter Password:");
  
  password = input.next();
  
 
 }while(obj.checkdetails(name,password));
 
 System.out.println("\t------You're Successfully login----" );
 
 int total = 0,pay;
 boolean loop = false;
 do {
 FoodMenuList.display();
 System.out.println("Enter the option:");
 int option,itemcost=0;
 try {
    option = input.nextInt();
    itemcost = FoodMenuList.cost(option);
 }
 catch(Exception e) {
   System.out.println(e);
    System.out.println("Enter the option upto 5");
    option = input.nextInt();
    itemcost = FoodMenuList.cost(option);
 }
   
    System.out.println("Enter the quantity:");
    int weight = input.nextInt();
    total+= weight*itemcost;
    
    System.out.println("for printbill enter 1 else 0");
    
    int forbill = input.nextInt();
    
    if(forbill == 1) {
     loop = false;
    }
    else {
     loop = true;
    }
 }while(loop);
 System.out.println("Bill amount is "+ total);
 System.out.println("click the mode of payment ");
 System.out.println("----------");
 while(resultSet.next()) {
	 System.out.println(resultSet.getInt("sno")+" "+resultSet.getString("paymentname"));
 }
 int payment=input.nextInt();
 switch (payment)
 {
 case 1:
 
 
 System.out.println("customer paid amount is  ");
 pay=input.nextInt();
 if(pay>total) {
	 System.out.println("Wait sir,I will give change....!");
	 int returnamt=pay-total;
	 System.out.println("Your change sir:"+returnamt+" Thankyou and visit our restaurant again Sir.....");
 }
 else {
	 int pendingamt=total-pay;
	 System.out.println("Sorry sir,Still You need to pay:"+pendingamt);
	 System.out.println("Wait sir,I will give change....Thankyou and visit our restaurant again Sir.....!");
	 
 }
 break;
 case 2:
	 System.out.println("Type your credit card pin ");
	 System.out.println("paymeny successfull....!"+"\n"+"Thankyou and visit our restaurant again Sir.....!");
 
 break;
 case 3:
	 System.out.println("Scan this QR code here and pay the bill sir..");
	 System.out.println("payment successfull....!"+"\n"+"Thankyou and visit our restaurant again Sir.....!");
	 break;
 }
 input.close();
 }
}
