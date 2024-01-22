package Restaurant;

public class CheckUserNameandPassword implements ULogin {
	private static String name = "saikumar";
	 private static String password = "1234";
	 @Override
	 public boolean checkdetails(String na,String pass) {
	  // System.out.println(name+" "+password);
	   
	  if( this.name.equals(na) && this.password.equals(pass)) {
	    
	   return false;
	  }
	  else {
	   return true;
	  }
	 }

}
