import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: quiz._id,
                title: quiz.title,
                quizType: quiz.quizType,
                points: quiz.points,
                assignmentGroup: quiz.assignmentGroup,
                shuffle: quiz.shuffle,
                timeLimit: quiz.timeLimit,
                multiAttempt: quiz.multiAttempt,
                numAttempt: quiz.numAttempt,
                showCorrectAnswers: quiz.showCorrectAnswers,
                accessCode: quiz.accessCode,
                oneQuestAtTime: quiz.oneQuestAtTime,
                webcam: quiz.webcam,
                lockQuestions: quiz.lockQuestions,
                dueDate: quiz.dueDate,
                availableDate: quiz.availableDate,
                untilDate: quiz.untilDate,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (a: any) => a._id !== quizId);
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quiz._id ? quiz : a
            ) as any;
        },
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((m: any) =>
                m._id === quizId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
    quizzesSlice.actions;

export default quizzesSlice.reducer;