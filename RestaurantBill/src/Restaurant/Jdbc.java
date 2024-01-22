package Restaurant;
import java.sql.*;
import java.util.Properties;
public class Jdbc{
    public static Connection connection;
    public static void initializeConnection() throws ClassNotFoundException,SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Properties property=new Properties();
        property.put("user","root");
        property.put("password","Saikumar@2000");
        connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/hotels",property); 
    }
}