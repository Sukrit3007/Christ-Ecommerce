import ModeToggle from "../ModeToggle";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <footer className="border-t">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <h1>logo</h1>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center ">
            <p className="text-sm ">
                Copyright &copy; {year}. All rights reserved.
            </p>
            <div>
                <ModeToggle/>
            </div>
            </div>
          </div>
        </div>
      </footer>
    )
}