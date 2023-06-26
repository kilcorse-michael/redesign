export default function Header(){
    return(
        <div className="sticky z-30 top-0 h-[5vh] bg-[#9001f5] text-indigo-50">
          <header>
            <ul className="list-none flex justify-center gap-4">
              <li className="p-2 text-3xl">Home</li>
              <li className="p-2 text-3xl">Blog</li>
              <li className="p-2 text-3xl">About</li>
              <li className="p-2 text-3xl">Contact</li>
            </ul>
          </header>
        </div>
      );
}