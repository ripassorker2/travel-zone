import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full bg-gray-500">
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button type="button" className="w-2/5 btn  btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
