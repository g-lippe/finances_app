
export default function NavBar({ title }) {

  if (!title) { title = " " }

  return (
    <div class="flex flex-col w-full overflow-x-hidden">
      <div className='mb-2 p-3 border-b-2 border-slate-100 flex flex-row'>
        <div className="basis-2/5 text-slate-800 text-2xl">
          logo
        </div>

        <div className="text-slate-800 text-2xl">
          {title}
        </div>
      </div>
    </div>
  );
}