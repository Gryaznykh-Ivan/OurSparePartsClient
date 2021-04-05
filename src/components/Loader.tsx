import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'

interface PropsFromState {
    isLoading: boolean
}

type Props = PropsFromState;

const Loader = ({ isLoading }: Props) => {
    const [visibility, setVisibility] = useState({
        display: 'flex',
        opacity: 'opacity-1'
    });

    useEffect(() => {
        clearTimeout((window as any).timeout);

        (window as any).timeout = setTimeout(() => {
            setVisibility({ display: 'flex', opacity: `opacity-0` });

            if (isLoading) {
                setTimeout(() => setVisibility({ display: 'flex', opacity: 'opacity-1' }), 0);
            } else {
                setTimeout(() => setVisibility({ display: 'hidden', opacity: 'opacity-0' }), 500);
            }
        }, 100); // если контент обновится быстрее чем за 100мс то лоадер не появится
    }, [isLoading]);

    return (
        <div className={ `fixed w-full h-full bg-red left-0 top-0 ${ visibility.display } justify-center items-center transform ${ visibility.opacity } duration-500 transition-opacity` }>
            <svg className="animate-pulse w-48 h-auto" width="161" height="92" viewBox="0 0 161 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 35.5H0L0.5 31.5L10 29L12.5 23L7 14.5L15 7L23.5 12L29 10L32 0H42.5L45 10L50.5 12L59.5 7L66.5 14.5L62 23L64 29L73.5 31.5V35.5H51C51 35.5 49.1457 29.5698 46.375 27C43.5222 24.3541 41.1398 23.0926 37.25 23C33.1356 22.902 30.4187 24.0984 27.5 27C24.8983 29.5865 23.5 35.5 23.5 35.5Z" fill="white" />
                <path d="M134.793 70L149.5 70L149.187 72.4789L143.241 74.0282L141.677 77.7465L145.119 83.0141L140.112 87.662L134.793 84.5634L131.35 85.8028L129.473 92L122.901 92L121.337 85.8028L117.895 84.5634L112.262 87.662L107.881 83.0141L110.697 77.7465L109.446 74.0282L103.5 72.4789L103.5 70L117.582 70C117.582 70 118.742 73.675 120.476 75.2676C122.262 76.9073 123.753 77.6891 126.187 77.7465C128.762 77.8072 130.462 77.0658 132.289 75.2676C133.917 73.6647 134.793 70 134.793 70Z" fill="white" />
                <path d="M83.7806 36H90.4446C94.9526 36 97.8366 34.04 97.8366 29.784C97.8366 25.668 94.7006 24.1 90.3326 24.1H86.3846V17.66H96.4646V15.448H83.7806V36ZM86.3846 33.928V26.088H89.9406C93.4406 26.088 95.2886 27.18 95.2886 29.84C95.2886 32.668 93.5246 33.928 90.0246 33.928H86.3846Z" fill="white" />
                <path d="M105.213 36.364C107.089 36.364 108.797 35.384 110.253 34.18H110.337L110.561 36H112.661V26.648C112.661 22.896 111.093 20.404 107.397 20.404C104.961 20.404 102.805 21.496 101.405 22.392L102.413 24.156C103.617 23.344 105.213 22.532 106.977 22.532C109.469 22.532 110.113 24.408 110.113 26.368C103.645 27.096 100.761 28.748 100.761 32.052C100.761 34.796 102.665 36.364 105.213 36.364ZM105.941 34.32C104.429 34.32 103.253 33.62 103.253 31.884C103.253 29.924 104.989 28.664 110.113 28.048V32.304C108.629 33.62 107.425 34.32 105.941 34.32Z" fill="white" />
                <path d="M121.858 36.364C125.106 36.364 127.99 34.628 127.99 31.8C127.99 29.616 126.59 28.468 124.798 28.02V27.88C126.394 27.264 127.318 25.976 127.318 24.492C127.318 21.748 124.742 20.404 121.802 20.404C119.59 20.404 117.91 21.076 116.454 22.112L117.518 23.792C118.75 22.924 119.898 22.448 121.662 22.448C123.538 22.448 124.826 23.204 124.826 24.772C124.826 26.256 123.594 27.152 121.158 27.152H119.422V29H121.522C124.014 29 125.414 29.868 125.414 31.604C125.414 33.284 123.734 34.32 121.634 34.32C120.094 34.32 118.61 33.956 117.21 32.78L116.09 34.432C117.882 35.888 119.73 36.364 121.858 36.364Z" fill="white" />
                <path d="M135.291 36.364C137.167 36.364 138.875 35.384 140.331 34.18H140.415L140.639 36H142.739V26.648C142.739 22.896 141.171 20.404 137.475 20.404C135.039 20.404 132.883 21.496 131.483 22.392L132.491 24.156C133.695 23.344 135.291 22.532 137.055 22.532C139.547 22.532 140.191 24.408 140.191 26.368C133.723 27.096 130.839 28.748 130.839 32.052C130.839 34.796 132.743 36.364 135.291 36.364ZM136.019 34.32C134.507 34.32 133.331 33.62 133.331 31.884C133.331 29.924 135.067 28.664 140.191 28.048V32.304C138.707 33.62 137.503 34.32 136.019 34.32Z" fill="white" />
                <path d="M4.64246 84.26C6.96246 84.26 9.02246 83.02 9.02246 81C9.02246 79.44 8.02246 78.62 6.74246 78.3V78.2C7.88246 77.76 8.54246 76.84 8.54246 75.78C8.54246 73.82 6.70246 72.86 4.60246 72.86C3.02246 72.86 1.82246 73.34 0.782461 74.08L1.54246 75.28C2.42246 74.66 3.24246 74.32 4.50246 74.32C5.84246 74.32 6.76246 74.86 6.76246 75.98C6.76246 77.04 5.88246 77.68 4.14246 77.68H2.90246V79H4.40246C6.18246 79 7.18246 79.62 7.18246 80.86C7.18246 82.06 5.98246 82.8 4.48246 82.8C3.38246 82.8 2.32246 82.54 1.32246 81.7L0.522461 82.88C1.80246 83.92 3.12246 84.26 4.64246 84.26Z" fill="white" />
                <path d="M14.5378 84.26C15.8778 84.26 17.0978 83.56 18.1378 82.7H18.1978L18.3578 84H19.8578V77.32C19.8578 74.64 18.7378 72.86 16.0978 72.86C14.3578 72.86 12.8178 73.64 11.8178 74.28L12.5378 75.54C13.3978 74.96 14.5378 74.38 15.7978 74.38C17.5778 74.38 18.0378 75.72 18.0378 77.12C13.4178 77.64 11.3578 78.82 11.3578 81.18C11.3578 83.14 12.7178 84.26 14.5378 84.26ZM15.0578 82.8C13.9778 82.8 13.1378 82.3 13.1378 81.06C13.1378 79.66 14.3778 78.76 18.0378 78.32V81.36C16.9778 82.3 16.1178 82.8 15.0578 82.8Z" fill="white" />
                <path d="M23.6268 84H25.4468V74.62H30.4868V84H32.3068V73.14H23.6268V84Z" fill="white" />
                <path d="M42.2301 84H44.0501V73.14H42.2301V78.2C41.6101 78.34 41.1101 78.4 40.4701 78.4C38.4701 78.4 37.5901 77.72 37.5901 76.12V73.14H35.7901V76.12C35.7901 78.8 37.3701 79.9 40.0901 79.9C41.0701 79.9 41.4701 79.82 42.2301 79.66V84Z" fill="white" />
                <path d="M50.5354 84.26C51.8754 84.26 53.0954 83.56 54.1354 82.7H54.1954L54.3554 84H55.8554V77.32C55.8554 74.64 54.7354 72.86 52.0954 72.86C50.3554 72.86 48.8154 73.64 47.8154 74.28L48.5354 75.54C49.3954 74.96 50.5354 74.38 51.7954 74.38C53.5754 74.38 54.0354 75.72 54.0354 77.12C49.4154 77.64 47.3554 78.82 47.3554 81.18C47.3554 83.14 48.7154 84.26 50.5354 84.26ZM51.0554 82.8C49.9754 82.8 49.1354 82.3 49.1354 81.06C49.1354 79.66 50.3754 78.76 54.0354 78.32V81.36C52.9754 82.3 52.1154 82.8 51.0554 82.8Z" fill="white" />
                <path d="M63.9045 84.26C65.2045 84.26 66.4445 83.76 67.4245 82.88L66.6245 81.66C65.9445 82.28 65.0645 82.74 64.0645 82.74C62.0645 82.74 60.7045 81.08 60.7045 78.58C60.7045 76.08 62.1445 74.38 64.1245 74.38C64.9845 74.38 65.6445 74.78 66.2845 75.34L67.2245 74.14C66.4445 73.46 65.4645 72.86 64.0445 72.86C61.2645 72.86 58.8045 74.96 58.8045 78.58C58.8045 82.18 61.0245 84.26 63.9045 84.26Z" fill="white" />
                <path d="M72.2654 84H74.0854V74.62H77.7454V73.14H68.6254V74.62H72.2654V84Z" fill="white" />
                <path d="M84.5264 84.26C86.0064 84.26 87.1664 83.76 88.1264 83.14L87.4664 81.94C86.6664 82.48 85.8064 82.8 84.7464 82.8C82.6864 82.8 81.2664 81.32 81.1464 79H88.4664C88.5064 78.74 88.5464 78.36 88.5464 77.96C88.5464 74.86 86.9864 72.86 84.2264 72.86C81.7064 72.86 79.3264 75.06 79.3264 78.58C79.3264 82.16 81.6464 84.26 84.5264 84.26ZM81.1264 77.68C81.3464 75.56 82.7064 74.32 84.2464 74.32C85.9464 74.32 86.9464 75.5 86.9464 77.68H81.1264Z" fill="white" />
                <path d="M91.5206 84H93.2206L97.3406 77.78C97.7406 77.12 98.3606 76.12 98.7806 75.44H98.8606C98.7806 76.86 98.6806 78.32 98.6806 79.46V84H100.461V73.14H98.7606L94.6406 79.36C94.2406 80.02 93.6206 81.02 93.2006 81.68H93.1206C93.1806 80.28 93.3006 78.82 93.3006 77.68V73.14H91.5206V84ZM96.0406 72.18C98.5606 72.18 99.4606 70.5 99.5406 68.78H98.0406C98.0006 70.04 97.5206 71.12 96.0406 71.12C94.5606 71.12 94.0806 70.04 94.0406 68.78H92.5406C92.6406 70.5 93.5406 72.18 96.0406 72.18Z" fill="white" />
                <path d="M23.4038 66.5H14.5L14.4102 58H9V66.5H0V54.4141V42H9V50.5H14.4102L14.5 42H23.4038V66.5Z" fill="white" />
                <path d="M41 63H37L36 66.5H26L33 42H45L52.0954 66.5H42L41 63ZM38 57.5H40L39 51.5L38 57.5Z" fill="white" />
                <path d="M63.5 42V59H67V42H76V59H79.5V42H89V66.5H54.3792V42H63.5Z" fill="white" />
                <path d="M107.5 42H117.21L117.5 66.5H108.5V55L103 66.5H93V42H102V54L107.5 42Z" fill="white" />
                <path d="M132.5 48.5L134.706 42.1719H145.18L138.72 54.1719L145.5 66.5L135 66.6719L132.5 60L129.5 66.6719H119L126 54.1719L119.5 42.1719L130 42L132.5 48.5Z" fill="white" />
                <path d="M139.5 58.04L141.5 61.04L151.5 51.04C151.5 51.04 153.69 51.4302 155 51.04C156.349 50.638 157.078 50.1044 158 49.04C158.857 48.0497 159.173 47.3083 159.5 46.04C159.89 44.5274 159.5 42.04 159.5 42.04L155.5 45.54C155.5 45.54 153.302 45.9164 152.5 45.04C151.828 44.3053 152 42.54 152 42.54L155.5 38.54C155.5 38.54 153.591 37.7906 152 38.04C150.961 38.2028 149.651 38.9457 149.5 39.04C147.972 39.9916 147.038 40.8221 146.5 42.54C146.091 43.8442 146.5 46.04 146.5 46.04L137.5 55.04L139.5 58.04ZM139.5 58.04L146.5 51.04" stroke="white" />
            </svg>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isLoading: state.categories.isLoading || state.products.isLoading || state.product.isLoading
})

export default connect(mapStateToProps)(Loader)
