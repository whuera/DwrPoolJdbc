package ec.com.app;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ec.com.app.dao.EmployeeDAO;
import ec.com.app.model.Employee;

@SpringBootApplication
public class SpringBootJdbcWeblogicConnectionPool implements CommandLineRunner{

	@Autowired
	private EmployeeDAO employeeDAO;
	
	@Autowired
	private DataSource dataSource;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootJdbcWeblogicConnectionPool.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//cerateEmployee();
		//getEmployeeById();
		//employeeDAO.updateEmployeeEmailById(3, "kishan.cs2111@gamil.com");
		//employeeDAO.deleteEmployeeById(3);
		
		System.out.println("DataSource==="+dataSource);
	}

	private void getEmployeeById() {
		Employee employee = employeeDAO.getEmployeeById(3);
		System.out.println(employee);
	}

	private void cerateEmployee() {
		Employee employee = new Employee();
		employee.setEmployeeName("Kishan");
		employee.setEmail("kishan.cs2006@gamil.com");
		employee.setSalary(90000.00);
		employeeDAO.createEmployee(employee);
	}
}
