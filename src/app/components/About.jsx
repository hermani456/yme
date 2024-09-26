const About = () => {
  return (
    <div className="bg-background">
      <section id="about" className="pb-20 max-w-screen-xl mx-auto p-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-secondary max-w-[30ch] mx-auto font-bold text-center pb-10">
            Quienes Somos
          </h2>
          <p className="max-w-prose text-text font-medium text-md leading-relaxed text-pretty text-left md:text-center">
            Somos una agencia de reclutamiento y recursos humanos dedicada a la
            integración de talentos locales, potenciando su participación en las
            diferentes industrias de la macrozona norte. Nos aseguramos de que
            los talentos locales que integramos aporten un valor significativo a
            nuestros clientes, acompañándolos durante su onboarding para
            garantizar la satisfacción de todas las partes. Nuestra misión es
            crear conexiones sólidas y oportunidades laborales significativas
            para todos, en un entorno inclusivo, equitativo y verde. Únete a
            nosotros en este viaje hacia un futuro más inclusivo, equitativo y
            verde.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
