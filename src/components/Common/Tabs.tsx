/**
 * @description Tab 컴포넌트
 * @returns {JSX.Element}
 */
const Tabs = (): JSX.Element => {
  return (
    <div className="mt-4">
      <div dir="ltr" data-orientation="horizontal" className="flex flex-col">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground flex gap-4 bg-gray-100"
          tabIndex={-1}
          data-orientation="horizontal"
          style={{ outline: "none" }}
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:rg:-content-all"
            data-state="active"
            id="radix-:rg:-trigger-all"
            className="w-20 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow  data-[state=active]:bg-white"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            All
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:rg:-content-active"
            data-state="inactive"
            id="radix-:rg:-trigger-active"
            className="w-20 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow  data-[state=active]:bg-white"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Active
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:rg:-content-completed"
            data-state="inactive"
            id="radix-:rg:-trigger-completed"
            className="w-20 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow  data-[state=active]:bg-white"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
