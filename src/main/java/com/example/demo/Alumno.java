package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Alumno {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_casa")
	private Casa casa;

	@ManyToOne()
	@JoinColumn(name = "id_mago")
	private Mago mago;

	@ManyToOne()
	@JoinColumn(name = "id_varita")
	private Varita varita;

	public Alumno() {}

	public Alumno(Casa casa, Mago mago, Varita varita) {
		this.casa = casa;
		this.mago = mago;
		this.varita = varita;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Casa getCasa() {
        return casa;
    }

    public void setCasa(Casa casa) {
        this.casa = casa;
    }

    public Mago getMago() {
        return mago;
    }

    public void setMago(Mago mago) {
        this.mago = mago;
    }

    public Varita getVarita() {
        return varita;
    }

    public void setVarita(Varita varita) {
        this.varita = varita;
    }

	

}