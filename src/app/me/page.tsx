import BlinkingEdge from '@/components/blinking-edge';
import NavbarDark from '@/components/navbar-dark';

const MePage = () => {
  return (
    <>
      <main className="font-sans text-redish h-[calc(100vh-320px)] bg-sec-background w-dvw flex justify-center">
        <NavbarDark />
        <div className="w-4/5 mt-28">
          <div className="mb-6">
            <h1 className="font-bold text-redish max-w-3xl">
              <i>Planck</i> | <i>Denpasar, Bali, Indonesia-Based</i>
            </h1>
            <p className="max-w-3xl">
              Specializing in 3D Art & Digital Branding. We merge streetwear aesthetics with cutting-edge digital
              visuals for global brands and artists.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="font-bold text-redish max-w-3xl">
              <i>WORK:</i> ONLY PARTY ENTERTAINMENT, SENSATION, COMMISION
            </h1>
            <p className="max-w-3xl">currently working with ONLY PARTY ENTERTAINMENT</p>
          </div>
        </div>
      </main>
      <BlinkingEdge />
    </>
  );
};

export default MePage;
