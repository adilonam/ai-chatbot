import { motion } from 'framer-motion';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p>
          This is{' '}
          <span className="font-medium underline underline-offset-4 ">
            Ready Ape
          </span>
          , a chatbot leveraging a multi-modal and reasoning model. It combines
          advanced AI capabilities to deliver a seamless and intelligent chat
          experience.
        </p>
      </div>
    </motion.div>
  );
};
