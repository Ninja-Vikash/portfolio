import { Card } from 'src/components/card';
import { Avatar } from 'src/components/avatar';
import { Iconify } from 'src/components/iconify';
import { IconButton } from 'src/components/icon-button/icon-button';

// ----------------------------------------

export function HomeView() {
  return (
    <div>
      <Card className="w-8/12 bg-linear-to-tl to-zinc-950 via-zinc-800/30 from-amber-400/60 border border-zinc-900/96 rounded-ee-sm rounded-ss-2xl rounded-se-4xl rounded-es-4xl">
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
            <IconButton>
              <Iconify icon="streamline-logos:github-logo-2-solid" width={20} />
            </IconButton>
            <IconButton>
              <Iconify icon="streamline-logos:logmein-logo-1-solid" width={20} />
            </IconButton>
            <IconButton>
              <Iconify icon="streamline-logos:instagram-logo-2-solid" width={20} />
            </IconButton>
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
    </div>
  );
}
