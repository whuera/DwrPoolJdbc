package ec.com.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/greet")
public class GreetingController {
	@RequestMapping(method=RequestMethod.GET)
	public String hello(@RequestParam(name="name", defaultValue="Guest") String name) {
		return "Hello, ".concat(name);
	}
	
	@RequestMapping("/resource")
	public class ResourceController {
	 
	    @RequestMapping(method = RequestMethod.GET)
	    String readResource() {
	        return "hello!";
	    }
	}
}
