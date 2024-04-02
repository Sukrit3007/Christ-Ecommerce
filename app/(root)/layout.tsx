

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <>
        <div>shop navbar</div>
        {children}
      </>
  
    );
  }