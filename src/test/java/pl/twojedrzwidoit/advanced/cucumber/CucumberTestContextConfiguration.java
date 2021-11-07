package pl.twojedrzwidoit.advanced.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;
import pl.twojedrzwidoit.advanced.SampleProjectApp;

@CucumberContextConfiguration
@SpringBootTest(classes = SampleProjectApp.class)
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
