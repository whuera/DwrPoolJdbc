package ec.com.app.controller;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;
import javax.sql.DataSource;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.lookup.DataSourceLookupFailureException;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.stereotype.Component;

import ch.qos.logback.classic.Logger;
import ec.com.app.model.Address;
import ec.com.app.model.Person;
import ec.com.app.service.impl.ServiceContact;



@Configuration
@Component
public class DWRCall {
	
	

	@Autowired
	private DataSource dataSource;
	
	
	//private ServiceContact serviceContact;
	
	/**
	 * Gets the string.
	 *
	 * @return the string
	 * @throws SQLException 
	 */

	
	//@Autowired
	//CallJndi calljndi;
	
	//@Autowired
	//InformationContact informationContact;
	
	//@Autowired
	//private DataSource dataSource;
	
	@Autowired
	//private SpringJdbc2 springJdbc2;
	
	@Bean
	public static DataSource dataBaseDataSource() throws NamingException, SQLException, DataSourceLookupFailureException {
		DataSource dataSource = null;
		try {
		final JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
		    dsLookup.setResourceRef(true);
		   // Thread.sleep(10000);
		    dataSource = dsLookup.getDataSource("java/dbguest");
		    System.out.println("datasource inside method ---> "+dataSource.getConnection());
		    }catch(Exception ex1) {
		    	System.out.println("Error al intentar recuperar jndi en method "+ex1.getMessage()+"\n"+ex1.getCause().toString());
		    }
		System.out.println("datasource object "+dataSource.getConnection().toString());
		    return dataSource;
		
	}
	/*
	@Bean
	public void getRemoteConnection() {
		try {
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			ctx.getBean("dataSource");
			JdbcTemplate jdbcTemplate = new JdbcTemplate((DataSource) ctx.getBean("dataSource"));
			//Connection connection = this.dataBaseDataSource().getConnection();
			System.out.println("conexion ok: "+ctx.getApplicationName()+"\n"+jdbcTemplate.getDataSource());
		} catch (Exception ex) {
			ex.getMessage();
			System.out.println("Error al intentar conectar");
			throw new NullPointerException("error in call jndi method");
		}
	}
	*/
	@Bean
	public String getString() throws DataSourceLookupFailureException, NamingException, SQLException {
		String value = null;
		Address addressoffice = new Address("amazonas-pereira");
		ServiceContact serviceContact = new ServiceContact(); 
		try {
			//Thread.sleep(10000);
			//System.out.println("datasource "+dataBaseDataSource().getConnection());			
			Connection conn = dataBaseDataSource().getConnection();
			System.out.println("connection ----> "+conn);			
			serviceContact.getInformationAllPersonsForOptions(conn, "1000");
			Person person = new Person("1", "Pedro Perez", "centro", 20, true, addressoffice);
			value = person.toString();
		} catch (Exception e) {

			value = "Error in callback";
			e.printStackTrace();
			System.out.println(value);
			throw new NullPointerException("error in call object person"+e.getMessage());
		}
		return value;
	}

	public String getData() {
		throw new NullPointerException("new message");
	}

	//public DataSource dataSource;

	

}
