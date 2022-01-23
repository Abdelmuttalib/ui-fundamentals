import React, { useRef } from 'react';
// import Routes from '@/routes/Routes';

export default function App() {
  const firstRef = useRef();
  return (
    <div>
      <Container>
        <h1 className='text-7xl p-6 rounded-xl rounded-bl-none bg-black text-green-400'>
          UI Design Fundamentals
        </h1>
        {/* <p>UI Design Principles refers to the roles or requiremenets</p> */}
        <button
          type='button'
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: firstRef.current.offsetTop,
            });
          }}
          className='self-start bg-black text-green-100 px-8 py-4 rounded-xl rounded-tl-none rounded-tr-none  text-xl font-semibold tracking-tight outline-none'
        >
          Get Started
        </button>
      </Container>
      <Container firstRef={firstRef}>
        <h2 className='text-4xl font-extrabold'>
          Understanding UI Design{' '}
          <h2 className='text-5xl text-green-500'>Fundamentals</h2>
        </h2>
        <ul className='text-xl font-medium pl-8 mt-10 flex flex-col gap-3'>
          <li>White Space</li>
          <li>Alignment</li>
          <li>Contrst</li>
          <li>Scale</li>
          <li>Color</li>
          <li>Proximity</li>
          <li>Typography</li>
          <li>Visual Hierachy</li>
        </ul>
      </Container>

      <Container>
        <div className='flex gap-5 justify-center items-center'>
          <div className='w-56 h-52 bg-gray-800 p-3'>
            <button className='py-2 px-4 text-left bg-blue-500 w-full rounded-xl mt-24'>
              Learn More
            </button>
            <p className='text-gray-300 text-xs text-center mt-2'>
              No Credit Card Reguired
            </p>
          </div>
          <div className='w-56 h-52 bg-gray-800 p-3 rounded-lg'>
            <button className='py-2 px-4 bg-blue-500 text-white font-semibold text-lg w-full rounded-xl mt-24'>
              Learn More
            </button>
            <p className='text-blue-400 text-center mt-3'>
              No Credit Card Reguired
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className='text-5xl text-green-500'>White Space</h2>
        <p className='text-xl mt-4 text-gray-700'>
          White space is the empty space between the elements in the user
          interface
        </p>
      </Container>

      <Container>
        <div className='flex flex-col gap-14 justify-center items-center bg-gray-900 py-7'>
          <div className='min-w-56 max-w-sm bg-white p-6'>
            <h1 className='mb-3'>My Title</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae perferendis assumenda sapiente repellendus quod, culpa
              unde? Cupiditate iste quia officia sequi, cumque ullam adipisci
              quisquam, necessitatibus explicabo quidem inventore.
            </div>
          </div>

          {/* FIX */}
          <div className='min-w-56 max-w-sm bg-white'>
            <h1>My Title</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae perferendis assumenda sapiente repellendus quod, culpa
              unde? Cupiditate iste quia officia sequi, cumque ullam adipisci
              quisquam, necessitatibus explicabo quidem inventore.
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className='text-5xl text-green-500'>Alignment</h2>
        <p className='text-xl mt-4 text-gray-700'>
          Alignment in UI design is the process of ensuring that every element
          is positioned correctly in relation to other elements
        </p>
      </Container>
      <Container>
        <div className='flex flex-col gap-14 justify-center items-center'>
          <div className='min-w-56 max-w-lg bg-gray-800 text-white rounded-xl px-8 py-8 flex flex-col gap-6'>
            <span className='mb-16 font-medium text-lg'>UI fundamentals</span>

            {/* FIX */}
            <h1 className='text-3xl'>Identifying string alignment</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae perferendis assumenda sapiente repellendus quod.
            </div>

            {/* FIX */}
            <button className='self-start px-8 bg-green-600 py-3 rounded-3xl text-base font-medium mt-4'>
              Get Aligned
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <div className='flex flex-col gap-14 justify-center items-center bg-gray-900 py-7'>
          <div className='min-w-56 max-w-sm bg-white'>
            <div className='w-full h-32 bg-red-200'></div>
            {/* FIX */}
            <div className='p-6'>
              <p className='text-gray-500 text-xs font-medium py-2'>
                JANUARY 14, 2021
              </p>
              <h1 className='text-xl mb-3'>The ui fundamentals</h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                repudiandae perferendis assumenda.
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className='flex flex-col gap-14 justify-center bg-blue-300 py-7 pl-10'>
          <div className='min-w-56 max-w-sm'>
            {/* FIX */}
            <h1 className='text-4xl text-gray-900'>Take a Vacation</h1>
            {/* #002A4E */}
            <div className='font-medium text-base whitespace-nowrao textmt-3 text-gray-900'>
              Lorem ipsum dolor sit amet consectetur.
            </div>
            {/* #006BC6 */}
            <button
              type='button'
              className='px-4 py-3 text-white font-semibold rounded-lg mt-8 bg-[#006BC6]'
            >
              EXPLORE NOW
            </button>
          </div>
        </div>
      </Container>
      {/* <Container>
        <h2 className='text-5xl text-green-500'> Scale</h2>
        <p className='text-xl mt-4 text-gray-700'>
          Just as with alignment, white space, contrast, and the other
          fundamentals, the size of every UI element must be carefully
          considered.
        </p>
      </Container> */}
      <Container>
        {/* PADDING */}
        <div className='w-[80] h-96 bg-gray-900 py-10 flex flex-col gap-8 p-5'>
          {/* PADDING */}
          {/* #2C3031 bg-gray-700 */}
          {[2, 3].map(() => (
            <div className='flex gap-5 bg-gray-800 justify-center items-center rounded-xl text-gray-200 p-4'>
              <div className='w-28 h-20 rounded-full bg-gray-500'></div>
              <div>
                {/* UPPERCASE */}
                <span className=' uppercase text-gray-500 text-xs'>
                  December 18, 2015
                </span>
                <h4 className='text-blue-300'>November Rain</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda, enim dolore.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <h2 className='text-5xl text-green-500'>Typography</h2>
        <p className='text-xl mt-4 text-gray-700'>
          Good typography requires the understanding of other fundamentals,
          along with a few special considerations.
        </p>
      </Container>
      <Container firstRef={firstRef}>
        <h2 className='text-4xl font-extrabold'>
          Understanding
          <h2 className='text-5xl text-green-500'>Typography</h2>
        </h2>
        <ul className='text-xl font-medium pl-8 mt-10 flex flex-col gap-3'>
          <li>Font Choice(s)</li>
          <li>Visual Hierachy</li>
          <li>Font size (scale)</li>
          <li>Alignment</li>
          <li>Letter spacing & line height</li>
          <li>Font styles (weight, italic, etc...)</li>
          <li>Color & Contrast</li>
        </ul>
      </Container>
      <Container>
        <>
          <h3 className='mb-4 text-4xl'>Our Testomonial</h3>
          <p className='mb-4 text-base font-medium'>
            See what our customers say about us!
          </p>
          <div className='flex gap-4'>
            <div className='w-2/4 flex flex-col gap-5 bg-gray-200 justify-center items-center rounded-xl p-6 text-black'>
              <div className='w-20 h-20 rounded-full bg-gray-400'></div>
              <div>
                {/* FIX */}
                <p className='text-lg leading-6'>
                  I think the service is absolutly fantastic and great, very
                  grateful for this
                </p>
                <h4 className='text-sm font-bold mt-6 text-gray-500'>
                  JOHN DOE
                </h4>
              </div>
            </div>
            <div className='w-2/4 flex flex-col gap-5 bg-gray-200 justify-center items-center rounded-xl p-6 text-black'>
              <div className='w-20 h-20 rounded-full bg-gray-400'></div>
              <div>
                {/* FIX */}
                <p className='text-lg leading-none'>
                  I think the service is absolutly fantastic and great, very
                  grateful for this
                </p>
                <h4 className='text-xl font-medium mt-6'>JOHN DOE</h4>
              </div>
            </div>
          </div>
        </>
      </Container>
      <Container>
        <h2 className='text-5xl text-green-500'> Visual Hierachy</h2>
        <p className='text-xl mt-4 text-gray-700'>
          Every element on a user interface has a level of importance. Some
          elements are more important than others. Visual Hierachy is how we
          establish this importance.
        </p>
      </Container>
      <Container>
        <div className='w-full h-96 bg-green-800 flex justify-center items-center gap-5'>
          {[1, 2, 3, 4, 5].map(() => (
            <div className='w-16 h-16 bg-white'></div>
          ))}
        </div>
      </Container>
      <Container>
        <div className='w-full h-96 bg-green-800 flex flex-col justify-center items-center gap-5'>
          <div className='w-16 h-16 bg-white mr-44'></div>
          <div className='flex gap-4 self-end mt-10 mr-4'>
            {[1, 2, 3].map(() => (
              <div className='w-16 h-16 bg-white'></div>
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className='w-full h-96 bg-green-800 flex justify-center items-center gap-5'>
          {[1, 2, 3, 4, 5].map((one) => (
            <div
              className={`w-16 h-16 ${one !== 4 ? 'bg-green-600' : 'bg-white'}`}
            ></div>
          ))}
        </div>
      </Container>
      <Container>
        <div className='w-full h-96 bg-green-800 flex justify-center items-center gap-5'>
          {[1, 2, 3, 4, 5].map((one) => (
            <div
              className={`w-16 h-16 ${
                one !== 2 ? 'bg-white' : 'bg-yellow-400'
              }`}
            ></div>
          ))}
        </div>
      </Container>
      <Container>
        <div className='w-full h-96 bg-green-800 flex justify-center items-center gap-5'>
          {[1, 2, 3, 4, 5].map((one) => (
            <div
              className={` ${
                one !== 2 ? 'bg-green-600 w-10 h-10' : 'bg-yellow-400 w-16 h-16'
              }`}
            ></div>
          ))}
        </div>
      </Container>
      <Container>
        <h2 className='text-5xl text-green-500 text-center'>Thank you</h2>
      </Container>
      {/* <Container>
        <div className='flex w-full h-full items-center justify-center'>
          <div className='bg-green-600 w-3/4 h-96 flex flex-col items-center justify-center'>
            <div className='w-3/4 h-80 bg-white h-auto m-1 text-center rounded-lg'>
              <div className='flex justify-center items-center bg-red-400 h-auto'>
                <div className='bg-red-300 rounded-full p-4'>
                  <Arrow />
                </div>
              </div>
              <h4 className='text-base font-normal'>Pay your debts</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                obcaecati suscipit, voluptate deserunt error quis! Eaque,
                doloribus. Placeat doloribus quisquam quae alias tenetur
                distinctio sint, temporibus ipsa, iusto, ipsam voluptas?
              </p>
              <p className='mt-2'>find out how</p>
            </div>
            <p className='text-white font-semibold mt-2'>
              There is no obligations
            </p>
          </div>
        </div>
      </Container> */}
    </div>
  );
}

const Container = (props) => {
  console.log('Container');

  return (
    <div
      ref={props.firstRef !== undefined ? props.firstRef : null}
      className='w-full min-h-screen flex flex-col justify-center px-8 bg-white'
    >
      {props.children}
    </div>
  );
};

const Arrow = () => {
  return (
    <svg
      width='70'
      height='70'
      viewBox='0 0 28 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 10L14 17L20 10'
        stroke='#1C1C1C'
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
