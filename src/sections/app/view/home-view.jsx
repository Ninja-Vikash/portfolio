import { Card } from 'src/components/card';
import { Avatar } from 'src/components/avatar';
import { Iconify } from 'src/components/iconify';
import { IconButton } from 'src/components/icon-button';

import { contacts } from '../contacts';

const CONTACTS = Object.values(contacts);

// ----------------------------------------

export function HomeView() {
  console.log(CONTACTS);

  return (
    <div className="pb-10">
      <div className="flex gap-3">
        <Card className="w-8/12 bg-linear-to-tl to-zinc-950 via-zinc-800/30 from-amber-400/60 border border-zinc-900/96 rounded-ee-sm rounded-ss-2xl rounded-se-6xl rounded-es-6xl">
          {/* *********************************
           * HEADER
           ********************************* */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Avatar src="/assets/avatar.png" width={56} />

              <div>
                <h5 className="text-lg">Hi, I&apos;m Vikash</h5>
                <p className="text-sm text-gray-400">Front-end Developer</p>
              </div>
            </div>

            <div className="flex gap-4">
              {CONTACTS.map(({ icon, url }) => (
                <IconButton key={url} href={url} target="_blank">
                  <Iconify icon={icon} width={20} />
                </IconButton>
              ))}
            </div>
          </div>

          {/* *********************************
           * BODY
           ********************************* */}
          <div className="mt-6 mb-6">
            <h1>Passionate to pursue the technology.</h1>
            <p className="mt-6 w-3/4 text-gray-300 leading-6">
              I enjoy learning new things and try to overcome new challenges while analyzing how I
              improved through them.
            </p>
          </div>
        </Card>

        <Card className="w-4/12 overflow-hidden relative bg-[radial-gradient(circle_at_bottom,white_40%,#fde047_70%,#facc15_100%)] rounded-es-sm rounded-ee-6xl rounded-se-2xl rounded-ss-6xl">
          <div className="absolute -bottom-8 left-16">
            <Iconify icon="fluent-emoji:ninja-light" width={280} />
          </div>
        </Card>
      </div>

      <div className="mt-3 flex gap-3">
        <Card className="w-4/12 relative pb-56 overflow-hidden rounded-ss-6xl rounded-se-sm rounded-es-2xl rounded-ee-sm">
          {/* *********************************
           * DESIGN
           ********************************* */}
          <img
            alt="star-bg"
            src="/assets/backgrounds/bg-stars.svg"
            className="absolute inset-0 z-1 h-[100%] w-[100%] "
          />
          <img
            alt="blured-shapes"
            src="/assets/backgrounds/blured-shapes.svg"
            className="absolute bottom-0 right-0 z-1 h-[50%]"
          />
          <div className="absolute inset-0 z-0 h-[100%] w-[100%] bg-linear-140 from-blue-600 to-purple-900/70" />

          {/* *********************************
           * MAIN CONTENT
           ********************************* */}
          <h2 className="leading-16 relative z-2 text-zinc-300">
            Currently I&apos;m working on <span className="text-white">Quizforces</span>
          </h2>
          <p className="mt-3 relative z-2 text-zinc-400 font-medium w-3/4">
            Building polished software and web experiences.
          </p>
        </Card>

        <Card className="relative w-8/12 bg-[radial-gradient(ellipse_at_top_right,darkgreen_20%,#101010_60%,#010101_110%)] rounded-ss-sm rounded-se-6xl rounded-es-sm rounded-ee-2xl">
          <img
            alt="quizforces-glance"
            src="/assets/backgrounds/quizforces-glance.png"
            className="absolute mx-auto bottom-0 w-[90%]"
          />

          <div className="px-3">
            <div className="mt-1 flex gap-4 items-center">
              <h2 className="font-light tracking-wide">
                <span className="font-medium">quizforces</span>
                .com
              </h2>

              <div className="mt-2 bg-zinc-200/20 p-2 rounded-full">
                <Iconify icon="solar:arrow-right-up-linear" width={28} />
              </div>
            </div>

            <p className="mt-4 text-zinc-500">Smart assessment platform for all!</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
