package ec.com.app.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import ec.com.app.model.Contacto;





/**
 * The Interface IServicePerson.
 */
public interface IServicePerson {
	
	/**
	 * Gets the information all persons for options.
	 *
	 * @param index the index
	 * @return the information all persons for options
	 */
	public ArrayList<Contacto> getInformationAllPersonsForOptions(Connection conn, String index)throws InterruptedException;
	
	

}
