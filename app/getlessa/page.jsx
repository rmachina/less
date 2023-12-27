
import AllUsersrc from "../../components/AllUsersrc"
import Main from "../../components/Main"

const Req = async () => {
  const ftc = await fetch('http://localhost:3000/api/message', { cache: 'no-cache' })
  return await ftc.json()
}

const MainPages = async () => {
  const data = await Req()
  console.log(data);

  return (
    <div className="min-h-screen fixed inset-0 z-[99999] bg-white overflow-y-scroll">
      <div className="max-w-[1200px] mx-auto px-3">
        <Main />
        <div className="mt-7 mb-32">
          <div>
            <h2 className="text-2xl font-semibold text-[#112152]">{data.length} Campaigns</h2>
          </div>
          <AllUsersrc data={data} />
        </div>
      </div>
    </div>
  )
}

export default MainPages
