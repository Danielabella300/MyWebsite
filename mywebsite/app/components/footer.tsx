import Container from "./container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-900 mt-8 fixed bottom-0 left-0 w-full">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 ">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="mx-3 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:bg-white dark:text-black dark:hover:bg-slate-400 dark:hover:text-white"
            >
              Read Documentation
            </a>
            <a
              href="#"
              className="mx-3 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:bg-white dark:text-black dark:hover:bg-slate-400 dark:hover:text-white"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;