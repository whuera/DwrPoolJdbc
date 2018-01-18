package ec.com.app.service.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.bea.core.repackaged.springframework.stereotype.Service;

import ec.com.app.model.Contacto;
import ec.com.app.service.IServicePerson;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;




// TODO: Auto-generated Javadoc
/**
 * The Class ServiceContact.
 */

@Service
@Component
public class ServiceContact implements IServicePerson {

	/** The Constant logger. */
	/*
	 * (non-Javadoc)
	 * 
	 * @see com.app.service.IServicePerson#getInformationAllPersons()
	 */
	//private static final Logger logger = LoggerFactory.getLogger(ServiceContact.class);
	
	/** The conn. 
	 * @throws InterruptedException */
	//public static conexionOracle conn = new conexionOracle();

	@Override
	public ArrayList<Contacto> getInformationAllPersonsForOptions(Connection conn, String index) throws InterruptedException {
		//Connection conexion = conn.getConnection();
		String statementsql = null;

		ResultSet rs = null;
		ArrayList<Contacto> listaContactos = new ArrayList<>();
		try {
			Statement st = conn.createStatement();
			statementsql =  "select * from SYSTEM.STG_CONTACT where email_primario is not null and rownum <="+index+"";
			
			System.out.println("sql ----> "+statementsql);
			rs = st.executeQuery(statementsql);
			if (rs != null) {
				while (rs.next()) {
					Contacto contacto = new Contacto();
					//contacto.setNumeroIdentificacion(rs.getString("NUMERO_IDENTIFICACION").trim());
					contacto.setPrimer_nombre(rs.getString("PRIMER_NOMBRE"));
					//contacto.setSegundo_nombre(rs.getString("SEGUNDO_NOMBRE"));
					contacto.setPrimer_apellido(rs.getString("PRIMER_APELLIDO"));
					//contacto.setSegundo_apellido(rs.getString("SEGUNDO_APELLIDO"));
					//contacto.setFechaNacimiento(rs.getString("FECHA_NACIMIENTO"));
					//estadoCivil = rs.getString("ESTADO_CIVIL").trim();				
					//contacto.setEstadoCivil(estadoCivil);
					//contacto.setEmail_primario(rs.getString("EMAIL_PRIMARIO").toLowerCase());
					//contacto.setProfesion(rs.getString("NOMBRE_PROFESION"));

					//logger.info("contacto :" + contacto.toString());
					listaContactos.add(contacto);
				}
			} else if (rs == null) {
				Contacto contacto = new Contacto();
				contacto.setCodeTransaction("T00");
				contacto.setDescTransaction("ERROR NO EXISTEN REGISTROS");
				listaContactos.add(contacto);
			}
			rs.close();
			st.close();
			conn.close();

		} catch (SQLException e) {

			e.printStackTrace();
		}
		System.out.println("listaContactos: "+listaContactos.toString());
		Thread.sleep(10000);
		return listaContactos;
	}

	/* (non-Javadoc)
	 * @see com.app.service.IServicePerson#getContactDataById(java.lang.String)
	 */
	
}
