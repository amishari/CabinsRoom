import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSettings as updateSettingsApi } from '../../../services/apiSetting';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success('Setting edited successfully!');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSetting };
}
