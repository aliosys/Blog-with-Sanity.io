import Image from 'next/image';

export default function ImageGallery() {
  return (
    <section className="mx-auto w-full max-w-screen-xl p-4 md:grid-cols-4 md:py-8">
      <h2 className="mb-12 text-center text-3xl font-bold">Gallery</h2>
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-4 p-4 md:grid-cols-4 md:py-8">
        <div className="grid gap-4">
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/broiler-farm.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/chicken-farm-1.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/chicken-image.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/chickens-in-farms.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/chicks-1.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/chicks-2.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/egg-chicken-farm.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/layer-farm-2.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/layer-farm.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/woman-feeding-hens-in-the-farm-free.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/egg-chicken-farm.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto max-w-full rounded-lg"
              src="/assets/images/woman-farmer-collecting.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
