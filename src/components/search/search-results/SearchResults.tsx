import { FC } from "react";
import Statistics from "./statistics/Statistics";
import SocialData from "./social-data/SocialData";

type Props = Readonly<{
  name: string;
}>;

const SearchResults: FC<Props> = ({ name }) => {
  return (
    <article
      className="bg-slate-800 mt-5 rounded-2xl p-5"
    >
      <header className="grid grid-cols-[auto_1fr] gap-5">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="Github Avatar"
            className="size-[100px] rounded-full p-1 ring-1 ring-gray-100"
          />
        </figure>
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-200">
                { name }
              </h2>
              <p className="text-blue-400 italic">
                <a href="#">@{name.replaceAll(' ', '_').toLowerCase()}</a>
              </p>
              <p className="text-gray-400 my-5">This profile has no bio.</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm italic">Joined 02 Feb, 2020</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Statistics />
        <SocialData />
      </main>
    </article>
  );
};

export default SearchResults;