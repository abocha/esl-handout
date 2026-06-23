export type TaskKind = "choice" | "gap" | "fix" | "rebuild" | "personal";

export type BaseTask = {
  readonly id: string;
  readonly kind: TaskKind;
  readonly skillTags: readonly string[];
  readonly prompt: string;
  readonly explanation?: string;
  readonly theoryCardIds?: readonly string[];
};

export type ChoiceTask = BaseTask & {
  readonly kind: "choice";
  readonly options: readonly { readonly id: string; readonly text: string }[];
  readonly correctOptionId: string;
};

export type GapTask = BaseTask & {
  readonly kind: "gap";
  readonly acceptedAnswers: readonly string[];
};

export type FixTask = BaseTask & {
  readonly kind: "fix";
  readonly acceptedAnswers: readonly string[];
};

export type RebuildTask = BaseTask & {
  readonly kind: "rebuild";
  readonly chunks: readonly string[];
  readonly acceptedAnswers: readonly string[];
};

export type PersonalTask = BaseTask & {
  readonly kind: "personal";
  readonly guidance?: string;
};

export type Task = ChoiceTask | GapTask | FixTask | RebuildTask | PersonalTask;
export type AutoCheckableTask = Exclude<Task, PersonalTask>;

export type DiagnosticSection = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly suggestedClusterIds?: readonly string[];
  readonly tasks: readonly Task[];
};

export type Cluster = {
  readonly id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly purpose: string;
  readonly focus: readonly string[];
  readonly typicalMistakes: readonly string[];
  readonly stages: {
    readonly tryFirst: readonly Task[];
    readonly practise: readonly Task[];
    readonly fixCommonMistakes: readonly Task[];
    readonly useItPersonally: readonly PersonalTask[];
  };
};

export type TheoryCard = {
  readonly id: string;
  readonly title: string;
  readonly useWhen: string;
  readonly pattern?: string;
  readonly examples: readonly string[];
  readonly commonMistake?: string;
  readonly miniCheck?: { readonly prompt: string; readonly answer: string };
};

export type HandoutPack = {
  readonly meta: {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string;
    readonly level: string;
    readonly version: string;
    readonly audience: string;
    readonly estimatedUse: string;
  };
  readonly startPage: {
    readonly title: string;
    readonly intro: string;
    readonly instructions: readonly string[];
  };
  readonly diagnostic: readonly DiagnosticSection[];
  readonly clusters: readonly Cluster[];
  readonly theoryCards: readonly TheoryCard[];
  readonly finalOutput: readonly PersonalTask[];
};
