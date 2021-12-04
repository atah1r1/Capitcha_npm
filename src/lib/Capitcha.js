import { useEffect, useState } from "react";
import React from 'react';

export default function Capitcha({
	setCaptchaText,
	captchaSize = 6,
	defaultCaptchaText = 'gh97dp',
	reloadBackground = '#494992',
	captchaCustomClass = '',
	reloadColor = '#FFFFFF',
	borderType = 'dashed',
	borderColor = '#4DACF5',
	backgroundColor = '#FFFFFF',
	iconWidth = 25,
	iconHeight = 25,
	reloadCustomClass = '',
}) {

	
	
	const [captchaValue, setCaptchaValue] = useState(defaultCaptchaText);
	
	const getRandomCaptcha = () => {
		const getGenRand = (max, min) => {
			const rando = (max, min) => {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			const rand = rando(max, min);
			return "number" != typeof rand ? "A" : rand;
		}
		const ALPHAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		let result = [];
		for (let i = 0; i < captchaSize; i++) {
			const gen = getGenRand(ALPHAS.length - 1, 0);
			result.push(getGenRand(9, 0) + ALPHAS[gen]);
		}
		result = result.join('').substring(0, captchaSize);
		setCaptchaText(result);
		setCaptchaValue(result);
	}

	useEffect(() => {
		getRandomCaptcha();
	}, [])

	useEffect(() => {
		setCaptchaText(defaultCaptchaText);
	}, [setCaptchaText, defaultCaptchaText])

	return (
		<div className="captcha_container">
			<div className={captchaCustomClass.length > 0 ? captchaCustomClass : "captcha_value"}>
				<span>
					{captchaValue}
				</span>
			</div>
			<div className={reloadCustomClass.length > 0 ? reloadCustomClass : "captcha_reload"}>
				<span onClick={getRandomCaptcha}>
					<svg xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
						<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
						<path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
					</svg>
				</span>
			</div>
			<style jsx>{
				`
					@import url('https://fonts.googleapis.com/css2?family=Tourney:wght@100;200;300;400&display=swap');
					.captcha_container {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
					}
					.captcha_container div {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
					}
					.captcha_value {
						border: 1px ${borderType} ${borderColor};
						padding: 2px 30px;
						background-color: ${backgroundColor};
						font-weight: 500;
						font-size: 25px;
						color: #4eacf5;
						font-family: 'Tourney', cursive;
						margin-right: 10px;
						user-select: none;
						width: 100%;
						height: 100%;
					}

						.captcha_reload span{
							padding: 8px 10px;
							background-color: ${reloadBackground};
							color: ${reloadColor};
							border-radius: 5px;
							cursor: pointer;
						}
					`
			}</style>
		</div>
	)
}

