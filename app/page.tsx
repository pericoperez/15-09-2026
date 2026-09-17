import { ShaderBackground } from "@/components/ui/adisyon-shader"

export default function Page() {
  return (
    <>
      <div className="relative h-screen min-h-[450px] w-screen bg-transparent overflow-hidden">
        <ShaderBackground className="absolute inset-0 -z-10" />
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-center bg-transparent">
          <p className="text-center text-[30px] text-white">
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since 1966, when designers at Letraset and James Mosley,
            the librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset&apos;s Body Type
            sheets.
          </p>
        </div>
      </div>
      <section className="h-[50vh] min-h-[450px] w-screen bg-[hsl(0_93.5%_81.8%)]" />
    </>
  )
}
