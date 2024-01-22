package Restaurant;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
public class FoodMenuList extends Jdbc{
 public static void display() throws ClassNotFoundException, SQLException {
   FoodMenuList.initializeConnection();
   Statement statement=FoodMenuList.connection.createStatement();
   ResultSet resultset=statement.executeQuery("select * from menulist");
   while(resultset.next()) {
	   
	   System.out.println(resultset.getInt("sno")+" "+resultset.getString("foodname")+" "+resultset.getString("foodcost"));
   }
 }

 public static int cost(int n) {
  
  ArrayList<Integer> costs = new ArrayList<Integer>(5);
     costs.add(200);
     costs.add(160); 
     costs.add(150);
     costs.add(40);
     costs.add(25);
  return costs.get(n-1);
 } 
}
