import { Download } from "react-feather"
import { QRCode, IProps as QRCodeProps } from "react-qrcode-logo"
import FileSaver from "file-saver"

import KncLogo from "../assets/kyber_logo_for_qr.png"

const QR_SIZE = 200
const QR_ID = "react-qrcode-logo"

const address = "0x0eccbe792950c5722e20e90bc1085a69b4cb0403"

const qrCodeProps: QRCodeProps = {
    logoImage: KncLogo,
    logoWidth: 32,
    logoHeight: 32,
    size: QR_SIZE,
    // `ethereum` is intentional. This QR is used to open the Send feature on the wallet (e.g. Metamask)
    // Chain is not switched by this prefix
    value: `ethereum:${address}`,
    eyeColor: { outer: "#000000", inner: "#000000" },
    quietZone: 14,
    removeQrCodeBehindLogo: true,
}

const QR = () => {
    const downloadQR = () => {
        try {
            const canvas = document.getElementById(QR_ID) as HTMLCanvasElement
            if (!canvas) return

            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

            const link = document.createElement("a")
            link.download = "your_qrcode-logo.png"
            link.href = image
            link.click()
            link.remove()
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    const downloadQR2 = () => {
        try {
            const canvas = document.getElementById(QR_ID) as HTMLCanvasElement
            if (!canvas) return

            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

            window.location.href = image
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    const downloadQR3 = async () => {
        try {
            const canvas = document.getElementById(QR_ID) as HTMLCanvasElement
            if (!canvas) return

            const image = canvas.toDataURL("image/png")

            const blob = await fetch(image).then((res) => res.blob())

            FileSaver.saveAs(blob, "image.png")
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    const downloadQR4 = async () => {
        try {
            const canvas = document.getElementById(QR_ID) as HTMLCanvasElement
            if (!canvas) return

            const image = canvas.toDataURL("image/png")

            const blob = await fetch(image).then((res) => res.blob())

            const blobUrl = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.download = "your_qrcode-logo.png"
            link.href = blobUrl
            link.click()
            link.remove()
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    const downloadQR5 = async () => {
        try {
            const link = document.createElement("a")
            link.download = "your_qrcode-logo.png"
            link.href =
                "https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            link.click()
            link.remove()
            link.setAttribute("rel", "nofollow")
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    let qrElement = null
    let error = true
    try {
        error = false
        qrElement = qrCodeProps ? <QRCode {...qrCodeProps} /> : <div>error</div>
    } catch (e) {
        qrElement = null
    }

    return (
        <div className="w-full sm:w-120 flex flex-col gap-5 p-4">
            <div className="flex flex-col items-center">
                {qrElement}
                {error}

                <div
                    className="flex items-center gap-4 border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
                    onClick={downloadQR}
                >
                    Download Image with Canvas
                    <Download size={14} />
                </div>

                <div
                    className="mt-4 flex items-center gap-4 border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
                    onClick={downloadQR2}
                >
                    Download Image directly
                    <Download size={14} />
                </div>

                <div
                    className="mt-4 flex items-center gap-4 border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
                    onClick={downloadQR3}
                >
                    File Saver
                    <Download size={14} />
                </div>

                <div
                    className="mt-4 flex items-center gap-4 border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
                    onClick={downloadQR4}
                >
                    Blob
                    <Download size={14} />
                </div>

                <a
                    href="https://images.pexels.com/photos/6510393/pexels-photo-6510393.jpeg?cs=srgb&dl=pexels-lachlan-ross-6510393.jpg&fm=jpg"
                    rel="nofollow"
                    className="mt-4 flex items-center gap-4 border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
                    // onClick={(e) => {
                    //     e.preventDefault()
                    // }}
                    download="custom-filename.jpg"
                >
                    Image
                    <Download size={14} />
                </a>
            </div>
        </div>
    )
}

export default QR
