import React from 'react';
import { Link } from 'react-router-dom';
import oscar from '../img/oscar.jpg';

const Header = () => {
  return (
    <header>
      <nav className='bg-white shadow dark:bg-zinc-900'>
        <div className='container px-6 py-4 mx-auto'>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='flex items-center justify-between'>
              <div className='text-xl font-semibold text-zinc-700'>
                <Link
                  to='/'
                  className='text-2xl font-bold transition-colors duration-200 transform font-display text-zinc-800 dark:text-white lg:text-3xl hover:text-zinc-700 dark:hover:text-zinc-300 focus:outline focus:outline-2 focus:outline-red-600'
                >
                  Locus
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className='flex md:hidden'>
                <button
                  type='button'
                  className='text-zinc-500 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 focus:outline-none focus:text-zinc-600 dark:focus:text-zinc-400'
                  aria-label='toggle menu'
                >
                  <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                    <path
                      fillRule='evenodd'
                      d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className='flex-1 md:flex md:items-center md:justify-between'>
              <div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
                <Link
                  to='/lugares'
                  className='px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md text-zinc-700 md:mt-0 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:outline focus:outline-2 focus:outline-red-600'
                >
                  Más Lugares
                </Link>
              </div>

              <div className='flex items-center mt-4 md:mt-0'>
                <button
                  type='button'
                  id='dropdownInformationButton'
                  data-dropdown-toggle='dropdownInformation'
                  className='flex items-center focus:outline-none'
                  aria-label='toggle profile dropdown'
                >
                  <div className='w-8 h-8 overflow-hidden border-2 rounded-full border-zinc-400'>
                    <img
                      className='object-cover w-full h-full'
                      src={oscar}
                      alt='avatar'
                    />
                  </div>

                  <h3 className='mx-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 md:hidden'>
                    Oscar Isaac
                  </h3>
                </button>
              </div>

              {/* <!-- Dropdown menu --> */}
              <div
                id='dropdownInformation'
                className='z-10 hidden w-auto bg-white divide-y rounded shadow divide-zinc-100 dark:bg-zinc-800 dark:divide-zinc-600'
              >
                <div className='px-4 py-3 text-sm text-zinc-900 dark:text-white'>
                  <div>Oscar Isaac</div>
                  <div className='font-medium truncate'>name@flowbite.com</div>
                </div>
                <ul
                  className='py-1 text-sm text-zinc-700 dark:text-zinc-200'
                  aria-labelledby='dropdownInformationButton'
                >
                  <li>
                    <a
                      href='#'
                      className='flex items-center px-4 py-2 transition-colors duration-200 transform hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white'
                    >
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Ver perfil</span>
                    </a>
                  </li>
                  <li>
                    <Link
                      to='/admin'
                      className='flex items-center px-4 py-2 transition-colors duration-200 transform hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                        />
                      </svg>

                      <span className='mx-1'>Administrar</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center px-4 py-2 transition-colors duration-200 transform hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white'
                    >
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Configuración</span>
                    </a>
                  </li>
                </ul>
                <div className='py-1'>
                  <Link
                    to='/login'
                    className='flex items-center px-4 py-2 text-sm transition-colors duration-200 transform text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-zinc-200 dark:hover:text-white'
                  >
                    <svg
                      className='w-5 h-5 mx-1'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z'
                        fill='currentColor'
                      ></path>
                    </svg>

                    <span className='mx-1'>Cerrar sesión</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
