import {Logo} from "./logo";


export function FullLogo() {


    return (
        <div className="flex items-center justify-start min-w-[160px] space-x-[6px]">
            <Logo/>
            <h1 className="flex items-baseline justify-center space-x-[6px]">
                <p className="text-[26px] font-bold dark:text-gray-50">Jizz</p>
                <svg className="animate-spin-slow duration-200" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#0d9488" d="M 10.859375 13.039062 C 10.125 13.242188 9.328125 13.183594 8.621094 12.839844 C 8.300781 13.429688 8.144531 14.183594 8.042969 14.992188 L 0.976562 18.671875 C 2.585938 13.96875 4.652344 11.757812 6.960938 10.855469 C 6.757812 10.128906 6.816406 9.328125 7.160156 8.621094 C 6.570312 8.304688 5.816406 8.144531 5.003906 8.042969 L 1.328125 0.976562 C 6.03125 2.585938 8.242188 4.652344 9.140625 6.960938 C 9.871094 6.757812 10.667969 6.816406 11.375 7.160156 C 11.699219 6.570312 11.855469 5.816406 11.957031 5.003906 L 19.023438 1.328125 C 17.414062 6.03125 15.347656 8.242188 13.035156 9.140625 C 13.242188 9.871094 13.183594 10.671875 12.839844 11.378906 C 13.429688 11.699219 14.183594 11.855469 14.992188 11.957031 L 18.671875 19.023438 C 13.96875 17.414062 11.757812 15.347656 10.855469 13.039062 Z M 10.207031 11.609375 C 11.09375 11.496094 11.722656 10.683594 11.609375 9.792969 C 11.496094 8.902344 10.683594 8.277344 9.792969 8.390625 C 8.90625 8.503906 8.277344 9.316406 8.390625 10.207031 C 8.503906 11.09375 9.316406 11.722656 10.207031 11.609375 Z M 10.207031 11.609375 "/></svg>
            </h1>
        </div>
    )
}