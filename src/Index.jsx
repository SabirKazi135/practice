function Index() {
  return (
    <div className="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
      <div className="brand mx-auto max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src="/img/logo-brand.svg" alt="Workcation" />
          <img
            className="mt-6 rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
          <h1 className="font-headline mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" />{' '}
            <span className="text-brand">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div className="mt-4 space-x-1 sm:mt-6">
            <a
              className="bg-brand focus:ring-brand hover:bg-brand-light active:bg-brand-dark inline-block transform rounded-lg px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-2 sm:text-base"
              href="#"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/img/beach-work.jpg"
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  );
}

export default Index;
