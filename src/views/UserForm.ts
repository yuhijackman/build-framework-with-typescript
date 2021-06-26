import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key:string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.change-name': this.onChangeNameClick,
			'click:.save-model': this.onSaveModel
		}
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	}

	onChangeNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.set({ name });
		}
	}

	onSaveModel = (): void => {
		this.model.save();
	}

	template(): string {
		return `
			<div>
				<input placeholder=${this.model.get('name')} />
				<button class="change-name">Change name</button>
				<button class="set-age">Set Random Age</button>
				<button class="save-model">Save</button>
			</div>
		`;
	}
}