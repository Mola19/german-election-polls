import { Institute, RawInstitute } from './Institute';
import { Parliament, RawParliament } from './Parliament';
import { Party, RawParty } from './Party';
import { RawSurvey, Survey } from './Survey';
import { RawTasker, Tasker } from './Tasker';
import { RawMethod, Method } from './Method';

export type RawPollData = {
  Database: {
    License: {
      Name: string;
      Shortcut: string;
      Link: string;
    };
    Publisher: string;
    Author: string;
    Last_Update: string;
  };
  Parliaments: RawParliament[];
  Institutes: RawInstitute[];
  Taskers: RawTasker[];
  Methods: RawMethod[];
  Parties: RawParty[];
  Surveys: RawSurvey[];
};

export type PollData = {
  parliaments: Parliament[];
  institutes: Institute[];
  taskers: Tasker[];
  methods: Method[];
  parties: Party[];
  surveys: Survey[];
};

export const EmptyPollData: PollData = {
  parliaments: [],
  institutes: [],
  taskers: [],
  methods: [],
  parties: [],
  surveys: [],
};
