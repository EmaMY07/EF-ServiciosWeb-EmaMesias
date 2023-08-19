package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VaritaRepository repositoryV;
	private final MagoRepository repositoryM;
	private final CasaRepository repositoryC;
	private final AlumnoRepository repositoryA;

	@Autowired
	public DatabaseLoader(
		VaritaRepository repositoryV,
		MagoRepository repositoryM,
		CasaRepository repositoryC,
		AlumnoRepository repositoryA
		) {
		this.repositoryV = repositoryV;
		this.repositoryM = repositoryM;
		this.repositoryC = repositoryC;
		this.repositoryA = repositoryA;
	}

	@Override
	public void run(String... strings) throws Exception {

		Varita varita1 = new Varita("Sauco");
		Varita varita2 = new Varita("Pelo de Unicornio");
		Varita varita3 = new Varita("Aliso");
		this.repositoryV.save(new Varita("Espino"));
		this.repositoryV.save(new Varita("Manzano"));
		this.repositoryV.save(new Varita("Sauce"));
		this.repositoryV.save(new Varita("Pino"));
		this.repositoryV.save(varita1);
		this.repositoryV.save(varita2);
		this.repositoryV.save(varita3);

		Mago mago1 = new Mago("Harry Potter");
		Mago mago2 = new Mago("Draco Malfoy");
		Mago mago3 = new Mago("Hermione Granger");
		this.repositoryM.save(mago1);
		this.repositoryM.save(mago2);
		this.repositoryM.save(mago3);
		this.repositoryM.save(new Mago("Ron Weasley"));

		Casa casa1 = new Casa("Gryffindor");
		Casa casa2 = new Casa("Slytherin");
		this.repositoryC.save(casa1);
		this.repositoryC.save(casa2);

		Alumno alumno1 = new Alumno(casa1, mago1, varita1);
		this.repositoryA.save(alumno1);
		Alumno alumno2 = new Alumno(casa2, mago2, varita2);
		this.repositoryA.save(alumno2);
		Alumno alumno3 = new Alumno(casa2, mago3, varita3);
		this.repositoryA.save(alumno3);


	}
}