import React, { useState } from 'react'
import PassiveSignupForm from '../components/becomeMember/signupForms/PassiveSignupForm';

export default function PassiveMember({ memberdata }) {
	const [data, setData] = useState([ memberdata ]);

	return (
		<section id='passiveSignup'>
			{data.map((passiveMemberData, index) => {
				const {} = passiveMemberData;

				return (
					<section className="passiveSignupContainer">
						<h1 className="passiveSignupHeading">Bliv passiv medlem i Lido Dartklub</h1>
						<PassiveSignupForm />
					</section>
				)
			})}
		</section>
	)
}
