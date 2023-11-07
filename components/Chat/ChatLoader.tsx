import { IconRobot } from '@tabler/icons-react';
import { FC } from 'react';

interface Props { }

export const ChatLoader: FC<Props> = () => {
  return (
    <div
      className="group border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100"
      style={{ overflowWrap: 'anywhere' }}
    >
      <div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl">
        <div className="min-w-[40px] items-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="teacher"><path fill="#fff" d="M12.25 45a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5Zm0-14a5.5 5.5 0 1 0 5.5 5.5 5.51 5.51 0 0 0-5.5-5.5Z"></path><path fill="#fff" d="M19.75 57h-15a1.5 1.5 0 0 1-1.5-1.5v-7a6.51 6.51 0 0 1 6.5-6.5h5a6.51 6.51 0 0 1 6.5 6.5v7a1.5 1.5 0 0 1-1.5 1.5Zm-13.5-3h12v-5.5a3.5 3.5 0 0 0-3.5-3.5h-5a3.5 3.5 0 0 0-3.5 3.5Z"></path><path fill="#fff" d="M20.25 51a1.5 1.5 0 0 1-1.13-2.49l14-16a1.5 1.5 0 1 1 2.26 2l-14 16a1.49 1.49 0 0 1-1.13.49zm39-41h-49a1.5 1.5 0 0 1 0-3h49a1.5 1.5 0 0 1 0 3zm0 31h-21a1.5 1.5 0 0 1 0-3h21a1.5 1.5 0 0 1 0 3z"></path><path fill="#fff" d="M55.25 41a1.5 1.5 0 0 1-1.5-1.5v-31a1.5 1.5 0 0 1 3 0v31a1.5 1.5 0 0 1-1.5 1.5zm-41-17a1.5 1.5 0 0 1-1.5-1.5v-14a1.5 1.5 0 0 1 3 0v14a1.5 1.5 0 0 1-1.5 1.5zm22-5h-11a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 0 1 0 3zm7 8h-18a1.5 1.5 0 0 1 0-3h18a1.5 1.5 0 0 1 0 3z"></path></svg>
          {/* <IconRobot size={30} /> */}
        </div>
        <span className="animate-pulse cursor-default mt-1">▍</span>
      </div>
    </div>
  );
};
