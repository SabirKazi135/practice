function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-5 p-5">
        <div className="relative -z-10">
          <div className="absolute -left-4 bottom-0 right-80 top-0 h-72 w-72 rounded-full bg-[#D3B0FA]"></div>
          <div className="absolute -bottom-8 left-20 right-8 top-8 h-72 w-72 rounded-full bg-[#F3A5D1]"></div>
          <div className="absolute bottom-0 left-60 right-4 top-0 h-72 w-72 rounded-full bg-[#F7DC46]"></div>
        </div>
        <div className="flex h-16 w-[448px] items-center justify-between rounded-lg bg-gray-200 p-5">
          <div className="h-4 w-48 rounded-[4px] border border-solid border-[#e5e7eb] bg-[#d1d5db]"></div>
          <div className="h-6 w-24 rounded-lg border-[] bg-[#D8B4FE]"></div>
        </div>
        <div className="flex h-16 w-[448px] items-center justify-between rounded-lg bg-gray-200 p-5">
          <div className="h-4 w-56 rounded-[4px] border border-solid border-[#e5e7eb] bg-[#d1d5db]"></div>
          <div className="h-6 w-20 rounded-lg border-[] bg-[#FDE047]"></div>
        </div>
        <div className="flex h-16 w-[448px] items-center justify-between rounded-lg bg-gray-200 p-5">
          <div className="h-4 w-44 rounded-[4px] border border-solid border-[#e5e7eb] bg-[#d1d5db]"></div>
          <div className="h-6 w-28 rounded-lg border-[] bg-[#F9A8D4]"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
