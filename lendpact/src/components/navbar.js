import React from 'react';

const CustomHeader = () => {
  return (
  <header>
    <nav
      aria-label="Primary navigation"
      class="tw-bg-primary tw-border-b tw-border-tertiary tw-relative"
    >
      <div
        class="tw-mx-auto tw-px-2.5 md:tw-px-4 lg:tw-px-8"
        
      >
        
        <div
          class="header__full tw-grid xl:tw-gap-x-4 tw-items-center header__full--mobile-open tw-gap-x-2.5"
          data-v-9d831f65
        >
          <div class="header__full__logo" data-v-9d831f65>
            <a
              href="https://www.kiva.org/"
              data-testid="header-home"
              class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline"
              data-v-9d831f65
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 23"
                class="tw-w-6 tw-text-brand"
                
              >
                <path
                  fill="currentColor"
                  d="M4.695.391H0v22.141h4.695V.391zm12.899 22.141h4.695V7.011h-4.695v15.521zm12.159 0h5.413l5.413-15.521h-4.662s-2.544 8.445-3.293 11.119h-.066c-.75-2.674-3.326-11.119-3.326-11.119h-4.956l5.477 15.521zm-23.537-8.31c7.37 0 9.092-6.158 9.092-7.21h-.637c-7.372 0-9.094 6.157-9.094 7.21h.639zm-.639.969c0 1.117 1.276 7.403 9.222 7.403h.638c0-1.119-1.277-7.403-9.221-7.403h-.639zM22.746 2.739C22.746 1.272 21.671 0 19.941 0c-1.727 0-2.804 1.272-2.804 2.739 0 1.468 1.077 2.739 2.804 2.739 1.73 0 2.805-1.271 2.805-2.739M57 7.011h-4.532V9.13c-.783-1.631-2.608-2.543-4.729-2.543-3.848 0-6.88 3.129-6.88 8.184 0 5.087 2.935 8.185 6.652 8.185 2.608 0 4.173-1.272 4.956-2.675v2.25H57V7.011zm-4.663 8.151c0 2.871-1.76 4.208-3.522 4.208-1.924 0-3.163-1.956-3.163-4.598 0-2.608 1.305-4.598 3.326-4.598 1.663 0 3.359 1.37 3.359 4.206v.782z"
                ></path>
              </svg>
              <span class="tw-sr-only">Kiva Home</span>
              
            </a>
          </div>
          <div data-v-9d831f65></div>
          <div class="header__full__lend" data-v-9d831f65 data-v-1d18b268>
            <a
              href="https://www.kiva.org/lend-by-category"
              data-testid="header-lend"
              class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline"
              aria-expanded="false"
              data-v-1d18b268
            >
              
              <span class="tw-flex tw-items-center" data-v-1d18b268>
                Lend
                <span
                  class="tw-inline-flex tw-w-3 tw-h-3 tw-transition-transform tw-duration-300"
                  aria-hidden="true"
                  role="img"
                  data-v-1d18b268
                >
                  <svg
                    class="tw-w-full tw-h-full tw-fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </span>
              </span>
              
            </a>
            <div
              class="tw-border-x-0 tw-w-full tw-hidden menu-dropdown tw-absolute tw-bg-white tw-border tw-border-solid tw-border-tertiary tw-border-t-0 tw-z-dropdown tw-px-2 tw-top-8 md:tw-top-9"
              
              aria-hidden="true"
              data-testid="header-lend-dropdown-list"
              data-v-1d18b268
            >
              
              <div
                class="tw-mx-auto tw-px-2.5 md:tw-px-4 lg:tw-px-8"
                
              >
                
                <menu class="tw-p-2 lg:tw-hidden">
                  <a href="/monthlygood">
                    <span
                      class="tw-inline-flex tw-items-center tw-pb-2 tw-mb-1 tw-gap-0.5 tw-border-b tw-border-tertiary tw-font-medium tw-text-action"
                    >
                      Lend monthly
                      <span
                        class="tw-inline-flex tw-w-3 tw-h-3"
                        aria-hidden="true"
                        role="img"
                      >
                        <svg
                          class="tw-w-full tw-h-full tw-fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                  
                </menu>
                <menu
                  class="tw-overflow-hidden tw-pb-3 lg:tw-pt-3 tw-hidden lg:tw-block"
                  data-v-dcc88788
                >
                  <div
                    
                    class="tw-transition tw-duration-1000 tw-ease-in-out"
                    data-v-dcc88788
                  >
                    <a href="/monthlygood" data-v-dcc88788>
                      <span
                        class="tw-inline-flex tw-items-center tw-py-1 tw-mb-2 tw-gap-0.5 tw-font-medium tw-text-action"
                        data-v-dcc88788
                      >
                        Lend monthly
                        <span
                          class="tw-inline-flex tw-w-3 tw-h-3"
                          aria-hidden="true"
                          role="img"
                          data-v-dcc88788
                        >
                          <svg
                            class="tw-w-full tw-h-full tw-fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                    <div
                      class="tw-grid tw-gap-2 md:tw-gap-3 lg:tw-gap-3.5"
                      
                      data-v-dcc88788
                    >
                      
                      <div class="tw-col-span-8" data-v-dcc88788>
                        <h2 class="tw-text-base tw-mb-2" data-v-dcc88788>
                          Categories
                        </h2>
                        <div
                          class="tw-flex tw-gap-4 tw-whitespace-nowrap"
                          data-v-dcc88788
                        >
                          <ul
                            class="tw-columns-2 tw-gap-4 tw-font-medium"
                            data-v-dcc88788
                          >
                    
                          </ul>
                          <div data-v-dcc88788>
                            <ul class="tw-font-medium" data-v-dcc88788>
                              <li >
                                <a
                                  href="https://www.kiva.org/lend-by-category/recommended-by-lenders"
                                  
                                  data-v-dcc88788
                                  >Recommended by lenders
                                </a>
                              </li>
                              <li >
                                <a
                                  href="https://www.kiva.org/categories"
                                  data-v-dcc88788
                                  >All categories
                                </a>
                              </li>
                              <li >
                                <a
                                  href="https://www.kiva.org/lend"
                                  data-v-dcc88788
                                  >All loans
                                </a>
                              </li>
                            </ul>
                            
                          </div>
                        </div>
                      </div>
                      <div class="tw-col-span-1" data-v-dcc88788>
                        
                      </div>
                      <div
                        class="tw-col-span-8 tw-flex tw-flex-col"
                        data-v-dcc88788
                      >
                        
                        <h2 class="tw-text-base tw-mb-2" data-v-dcc88788>
                          Regions
                        </h2>
                        <div
                          class="tw-flex tw-whitespace-nowrap tw-h-full"
                          data-v-dcc88788
                        >
                          <ul class="tw-font-medium" data-v-dcc88788>

                          </ul>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </menu>
                
              </div>
              
            </div>
          </div>
          <div
            id="top-nav-search-area"
            data-testid="header-search-area"
            class="header__full__search tw-py-1.5 md:py-0 tw--mx-2.5 tw-px-2.5 md:tw-mx-0 md:tw-px-0 tw-border-t tw-border-tertiary md:tw-border-t-0 tw-hidden md:tw-hidden md:tw-block md:!tw-block"
            data-v-9d831f65
            data-v-88a3ddd7
          >
            <form class="tw-relative" autocomplete="off" data-v-88a3ddd7>
              <label
                for="top-nav-search"
                class="tw-sr-only"
                data-v-88a3ddd7
                >Search all loans</label
              >
              <div
                class="tw-inline-flex tw-w-full"
                
                data-v-88a3ddd7
              >
                <div class="tw-relative tw-w-full">
                  <input
                    id="top-nav-search"
                    type="text"
                    class="tw-h-6 tw-w-full tw-px-2 tw-border tw-border-tertiary tw-rounded-sm tw-appearance-none tw-text-base tw-bg-primary tw-ring-inset focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-action focus:tw-border-transparent tw-pl-6"
                    placeholder="Search all loans"
                    name="queryString"
                    data-testid="header-search-text-input"
                    value
                  />
                  <span
                    class="tw-inline-flex tw-w-3 tw-h-3 tw-absolute tw-top-1.5 tw-left-1.5 tw-pointer-events-none"
                    aria-hidden="true"
                    role="img"
                  >
                    <svg
                      class="tw-w-full tw-h-full tw-fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      ></path>
                    </svg>
                  </span>
                  
                  <button
                    
                    type="button"
                    class="tw-absolute tw-top-1.5 tw-right-1.5"
                  >
                    <span class="tw-sr-only">clear input</span>
                    <span
                      class="tw-inline-flex tw-w-3 tw-h-3"
                      aria-hidden="true"
                      role="img"
                    >
                      <svg
                        class="tw-w-full tw-h-full tw-fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  
                </div>
              </div>
              <ol
                
                class="search-results tw-w-full tw-bg-primary tw-p-2.5 tw-border tw-border-tertiary tw-fixed tw-z-popover tw-right-0 tw-bottom-0 tw-left-0 tw-overflow-auto md:tw-absolute md:tw-bottom-auto md:tw-top-auto md:tw-rounded-b"
                data-v-88a3ddd7
              >
            
              </ol>
              <input
                type="submit"
                class="tw-sr-only"
                aria-hidden="true"
                tabindex="-1"
                data-v-88a3ddd7
              />
            </form>
          </div>
          <div class="header__full__right-side" data-v-9d831f65>
            <div
              class="tw-flex tw-justify-end tw-gap-x-2.5 xl:tw-gap-4"
              data-v-9d831f65
            >
              <div
                data-testid="header-mobile-search-toggle"
                class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline tw-hidden"
                aria-expanded="false"
                aria-pressed="false"
                aria-controls="top-nav-search-area"
                data-v-9d831f65
              >
                
                <span
                  class="tw-inline-flex tw-w-3 tw-h-3"
                  aria-hidden="true"
                  role="img"
                  data-v-9d831f65
                >
                  <svg
                    class="tw-w-full tw-h-full tw-fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                    ></path>
                  </svg>
                </span>
                
              </div>
              <a
                href="https://www.kiva.org/borrow"
                data-testid="header-borrow"
                class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline tw-hidden md:tw-inline-flex"
                data-v-9d831f65
              >
                
                Borrow
                
              </a>
              <div class="tw-relative" data-v-9d831f65 data-v-1d18b268>
                <a
                  href="https://www.kiva.org/about"
                  data-testid="header-about"
                  class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline"
                  aria-expanded="false"
                  data-v-1d18b268
                >
                  
                  <span class="tw-flex tw-items-center" data-v-1d18b268>
                    About
                    <span
                      class="tw-inline-flex tw-w-3 tw-h-3 tw-transition-transform tw-duration-300"
                      aria-hidden="true"
                      role="img"
                      data-v-1d18b268
                    >
                      <svg
                        class="tw-w-full tw-h-full tw-fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  
                </a>
                <div
                  class="tw-rounded-b tw-hidden menu-dropdown tw-absolute tw-bg-white tw-border tw-border-solid tw-border-tertiary tw-border-t-0 tw-z-dropdown tw-px-2 tw-top-8 md:tw-top-9"
                  
                  aria-hidden="true"
                  data-testid="header-about-dropdown-list"
                  data-v-1d18b268
                >
                  
                  <ul>
                    <li>
                      <a href="/about">About us </a>
                    </li>
                    <li>
                      <a href="/about/partner-with-us"
                        >Partner with us
                      </a>
                    </li>
                    <li>
                      <a href="/about/how">How Kiva works </a>
                    </li>
                    <li class="tw-flex md:tw-hidden">
                      <a href="/donate/supportus">Support Kiva </a>
                    </li>
                    <li>
                      <a href="/about/where-kiva-works"
                        >Where Kiva works
                      </a>
                    </li>
                    <li>
                      <a href="/impact">Impact </a>
                    </li>
                    <li>
                      <a href="/about/leadership">Leadership </a>
                    </li>
                    <li>
                      <a href="/about/finances">Finances </a>
                    </li>
                    <li>
                      <a href="/about/press-center">Press </a>
                    </li>
                    <li>
                      <a href="/about/due-diligence">Due diligence </a>
                    </li>
                  </ul>
                  
                </div>
              </div>
              <div
                data-testid="header-basket"
                class="tw-cursor-pointer tw-inline-flex tw-items-center tw-flex-shrink-0 tw-font-medium tw-text-primary tw-whitespace-nowrap tw-h-8 md:tw-h-9 hover:tw-text-action-highlight hover:tw-no-underline focus:tw-no-underline tw-hidden"
                data-v-9d831f65
              >
                
                <span
                  class="tw-bg-secondary tw-rounded-sm tw-py-0.5 tw-px-1 tw-mr-1"
                  >0</span
                >
                Basket
               
              </div>
              
            </div>
          </div>
        </div>
       
      </div>
    </nav>
  </header>
  );
};

export default CustomHeader;